-- Force MySQL to use mysql_native_password for root
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;

-- Create the product table
CREATE TABLE IF NOT EXISTS products (id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        thumbnail VARCHAR(255),
    title VARCHAR(255),
    brand VARCHAR(255),
    category VARCHAR(255),
    price DOUBLE,
    rating DOUBLE,
    stock INT,
    shipping_information VARCHAR(255)
    );

-- Insert sample product
INSERT IGNORE INTO products (thumbnail, title, brand, category, price, rating, stock, shipping_information)
VALUES
    ('https://via.placeholder.com/100x100.png?text=Product+1', 'iPhone 12', 'Apple', 'Smartphones', 799, 4.7, 34, 'Free shipping within 3-5 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+2', 'Galaxy S21', 'Samsung', 'Smartphones', 699, 4.5, 42, 'Ships in 2 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+3', 'MacBook Pro', 'Apple', 'Laptops', 1499, 4.8, 10, 'Free next-day delivery'),
    ('https://via.placeholder.com/100x100.png?text=Product+4', 'PlayStation 5', 'Sony', 'Gaming', 499, 4.6, 8, 'Ships within a week'),
    ('https://via.placeholder.com/100x100.png?text=Product+5', 'AirPods Pro', 'Apple', 'Accessories', 249, 4.4, 75, 'Free shipping'),
    ('https://via.placeholder.com/100x100.png?text=Product+6', 'ThinkPad X1', 'Lenovo', 'Laptops', 1299, 4.5, 15, 'Delivery in 4 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+7', 'Sony WH-1000XM5', 'Sony', 'Accessories', 399, 4.7, 22, 'Ships tomorrow'),
    ('https://via.placeholder.com/100x100.png?text=Product+8', 'Dell XPS 13', 'Dell', 'Laptops', 1099, 4.6, 18, 'Ships in 3-5 days');

