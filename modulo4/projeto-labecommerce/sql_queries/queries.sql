CREATE TABLE P_labecommerce_Users (
	id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);

CREATE TABLE P_labecommerce_Products (
	id varchar(255) primary key,
    name varchar(255) not null,
    price float not null,
    image_url varchar(255)
);

CREATE TABLE P_labecommerce_Purchases (
	id varchar(255) primary key,
    user_id varchar(255) not null,
    total_price float not null,
    FOREIGN KEY (user_id) REFERENCES P_labecommerce_Users(id)
);

CREATE TABLE P_labecommerce_Items_Purchased (
	purchase_id varchar(255) not null,
    product_id varchar(255) not null,
    quantity int not null,
    FOREIGN KEY (product_id) REFERENCES P_labecommerce_Products(id)
);

select * from P_labecommerce_Users;
select * from P_labecommerce_Products;
select * from P_labecommerce_Purchases;
select * from P_labecommerce_Items_Purchased;

delete from P_labecommerce_Items_Purchased;
delete from P_labecommerce_Purchases;

select * from P_labecommerce_Purchases P 
inner join P_labecommerce_Items_Purchased IP on P.id = IP.purchase_id
inner join P_labecommerce_Products PP on IP.product_id = PP.id;