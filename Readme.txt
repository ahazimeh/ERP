cd back
cp .env.example .env
//then enter .env file and enter your db info
composer install
php artisan migrate --seed
composer dump-autoload
php artisan jwt:secret
php artisan serve

cd front
npm install
npm start


accoounts
ali@gmail.com
farah@gmail.com
hussien@gmail.com

password:12345678