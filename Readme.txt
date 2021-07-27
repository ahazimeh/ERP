cd back
cp .env.example .env
//then enter .env file and enter your db info
composer install
php artisan migrate --seed
php artisan storage:link
composer dump-autoload
php artisan jwt:secret

cd front
npm install
npm start