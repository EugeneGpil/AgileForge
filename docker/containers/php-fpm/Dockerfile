FROM php:8.2-fpm-bookworm

COPY ./set_perm.sh /set_perm.sh

ARG USER_ID=1000
ARG GROUP_ID=1000
RUN \
    echo "Create group app" && \
    groupadd -g ${GROUP_ID} app && \
    \
    echo "Create user app in group app" && \
    useradd -u ${USER_ID} -m app -g app && \
    \
    echo "Set up umask for app user (running console commands)" && \
    echo "umask 002" >> /home/app/.bashrc && \
    \
    echo "Set up umask for root user (running php-fpm)" && \
    echo "umask 002" >> /root/.bashrc && \
    \
    echo "Install composer" && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php &&\
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer && \
    \
    echo "Create file with bash commands history" && \
    mkdir /commandhistory && \
    touch /commandhistory/.bash_history && \
    chown -R app:app /commandhistory && \
    echo "export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" >> "/home/app/.bashrc" && \
    \
    echo "Run apt update before install every time" && \
    apt-get update && \
    \
    echo "Install gettext extension" && \
    docker-php-ext-install gettext && \
    \
    echo "Install zip extension" && \
    apt-get install --no-install-recommends -y \
        zlib1g-dev \
        libzip-dev \
        unzip && \
    docker-php-ext-install zip && \
    \
    echo "Install intl extension" && \
    apt-get install libicu-dev --no-install-recommends -y && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl && \
    \
    echo "Install mysql extension" && \
    docker-php-ext-install pdo_mysql && \
    \
    echo "Install math extension" && \
    docker-php-ext-install bcmath && \
    \
    echo "Set permissions for script" && \
    chown app:app /set_perm.sh && \
    chmod u+x /set_perm.sh && \
    \
    echo "Install acl. Without acl system will not follow advanced acl permissions config" && \
    apt-get install acl -y --no-install-recommends
