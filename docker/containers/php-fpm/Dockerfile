FROM php:8.2-fpm-bookworm

COPY ./set_perm.sh /set_perm.sh

ARG USER_ID=1000
ARG GROUP_ID=1000
RUN \
    echo "Создать группу app" && \
    groupadd -g ${GROUP_ID} app && \
    \
    echo "Создать юзера app в группе app" && \
    useradd -u ${USER_ID} -m app -g app && \
    \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php &&\
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer && \
    \
    mkdir /commandhistory && \
    touch /commandhistory/.bash_history && \
    chown -R app:app /commandhistory && \
    echo "export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" >> "/home/app/.bashrc" && \
    \
    apt-get update && \
    apt-get install git --no-install-recommends -y && \
    \
    docker-php-ext-install gettext && \
    \
    apt-get install --no-install-recommends -y \
        zlib1g-dev \
        libzip-dev \
        unzip && \
    docker-php-ext-install zip && \
    \
    apt-get install libicu-dev --no-install-recommends -y && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl && \
    \
    docker-php-ext-install \
      pdo_mysql \
      bcmath && \
    \
    chown app:app /set_perm.sh && \
    chmod u+x /set_perm.sh && \
    \
    apt-get install acl -y --no-install-recommends