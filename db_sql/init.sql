-- Force MySQL to use mysql_native_password for root
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;

-- Create the product table
CREATE TABLE IF NOT EXISTS products (
                                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
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
INSERT INTO products (thumbnail, title, brand, category, price, rating, stock, shipping_information)
VALUES ('thumb1.jpg', 'Product 1', 'Brand A', 'Category A', 10.99, 4.5, 20, 'Ships in 3-5 days');
