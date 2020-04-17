-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.


SELECT *
FROM product
 JOIN
 category ON categoryid = category.Id;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT [order].id,
 companyName,
 shipvia,
 shipper.id,
 orderDate
FROM [order]
 JOIN
 shipper ON [order].ShipVia = shipper.id
where orderDate < date('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT productName,
 Quantity
FROM Product
 JOIN
 orderdetail ON orderdetail.productid == product.id
WHERE orderdetail.orderId = '10251';
;



-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [order].Id,
 Customer.CompanyName,
 employee.LastName
FROM [order]
 JOIN
 customer ,
 employee
ON [order].CustomerId == customer.Id AND 
                   [order].EmployeeId == employee.Id;
;
