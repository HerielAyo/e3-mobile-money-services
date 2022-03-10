create schema if not exists mobile_payments;
use mobile_payments;

create table if not exists payment_method(
    id int not null auto_increment,
    method_name varchar(255) not null,
    primary key(id)
);

create table if not exists mpesa_api(
    id int not null auto_increment,
    tribe_id int not null,
    phone_number varchar(255),
    sender_name varchar(255),
    amount int,
    transaction_time DATETIME,
    transaction_type ENUM('sent', 'received'),
    payment_method_id int,
    transaction_status varchar(255),
    primary key(id),
    foreign key (payment_method_id) references payment_method(id)
);