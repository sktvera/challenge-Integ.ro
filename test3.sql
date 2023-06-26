SELECT u.name -- Select the user's name
FROM user u -- Main table: user (users)
JOIN user_customer uc ON u.id = uc.user_id -- Join the user table with user_customer using the id and user_id relationship
/*
The user_customer table serves as an intermediate table to relate users (user) with customers (customer),
where the id column in user matches the user_id column in user_customer.
*/

SELECT u.birthdate -- Select the user's birthdate
FROM user u -- Main table: user (users)
LEFT JOIN user_customer uc ON u.id = uc.user_id -- Left join the user table with user_customer using the id and user_id relationship
/*
The user_customer table serves as an intermediate table to relate users (user) with customers (customer),
where the id column in user matches the user_id column in user_customer.
Using a left join will include all rows from the user table, even if they don't have a match in the user_customer table.
*/

SELECT c.name AS customer_name -- Select the customer's name and assign an alias "customer_name"
FROM user u -- Main table: user (users)
JOIN user_customer uc ON u.id = uc.user_id -- Join the user table with user_customer using the id and user_id relationship
JOIN customer c ON uc.customer_id = c.id -- Join the user_customer table with customer using the customer_id and id relationship
WHERE u.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR) -- Filter by user's birthdate less than or equal to 18 years before the current date
AND u.status = 1 -- Filter by user's status equal to 1
AND c.status = 1 -- Filter by customer's status equal to 1