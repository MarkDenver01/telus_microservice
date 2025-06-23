FROM php:8.3-fpm

# Install dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev zip curl netcat-openbsd && \
    docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html

# Copy only composer files first to cache layer
COPY php-backend/composer.json php-backend/composer.lock* ./

# Install Composer and dependencies
RUN curl -sS https://getcomposer.org/installer | php && \
    php composer.phar install --no-scripts --no-autoloader

# Copy the rest of the application
COPY php-backend/ .

# Run composer again to finalize autoloaders
RUN php composer.phar dump-autoload --optimize

# Copy wait-for-it.sh from root context
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 8000

ENTRYPOINT ["/wait-for-it.sh", "db:3306", "--", "php", "-S", "0.0.0.0:8000", "-t", "public"]
