-- Crear la tabla de Usuarios
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    rut VARCHAR(20) NOT NULL,
    birth_date TIMESTAMP NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(25) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    role VARCHAR(15) NOT NULL,
    status varchar(1) NOT NULL
);

INSERT INTO Users (username, rut, birth_date, email,  phone, password, role, status)
VALUES 
    ('usuario1','1-9', '2001-10-11', 'usuario1@example.com', '123456789', 'contraseña1', 'user','A'),
    ('usuario2', '1-9', '2004-10-11','usuario2@example.com', '987654321', 'contraseña2', 'admin','A');

-- Crear la tabla de Productos y Publicaciones, 
-- como es un Marketplace 
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    category_id INT REFERENCES categories(category_id),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL,
    user_id INT REFERENCES Users(user_id),
    image_url VARCHAR(255)
);
INSERT INTO Products (name, description, price, quantity, category, image_url, post_status, user_id)
VALUES 
    ('Producto 1', 'Descripción del Producto1', 19.99, 100, 'Categoría 1', 'https://ejemplo.com/imagen1.jpg', 'Publicado', 1),
    ('Producto 2', 'Descripción del Producto2', 29.99, 50, 'Categoría 2', 'https://ejemplo.com/imagen2.jpg', 'Publicado', 2);

-- Crear la tabla de Categorías
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100)  NOT NULL
 
);
INSERT INTO categories(name) VALUES('Belleza'),
                            ('Anticonceptivos'),
                            ('Antidepresivos'),
                            ('Antipsicóticos'),
                            ('Analgésicos'),
                            ('Antipiréticos'),
                            ('Antidiarreicos'),
                            ('Antihipertensivos'),
                            ('Antiinflamatorios'),
                            ('Antialérgicos'),
                            ('Antivirales'),
                            ('Diabetes'),
                            ('Suplementos alimenticios'),
                            ('Oftalmológicos'),
                            ('Vitaminas y minerales'),
                            ('Laxantes'),
                            ('Tiroides');


-- Crear la tabla de Comentarios y valoraciones
CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES Products(product_id),
    user_id INT REFERENCES Users(user_id),
    rating INT NOT NULL,
    comment TEXT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Favorites (
    favorites_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES Products(product_id),
    user_id INT REFERENCES Users(user_id),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO Reviews (product_id, user_id, rating, comment)
VALUES 
    (1, 1, 5, '¡Excelente producto, lo recomiendo totalmente!'),
    (2, 2, 4, 'Buen producto, pero podría mejorar en algunos aspectos.');

    -- Crear la tabla de Cabecera de Carrito de compras
CREATE TABLE Cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL
);
INSERT INTO ShoppingCartHeader (user_id, status)
 VALUES (2, 'Abierto'),
 (1, 'Abierto');

-- Crear la tabla de Detalles de Carrito de compras
CREATE TABLE Cart_Items (
    detail_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES cart(cart_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);