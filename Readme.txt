cd front
npm install
npm start

cd back
php artisan key:generate
php artisan migrate --seed
composer install
php artisan storage:link
composer dump-autoload
php artisan jwt:secret