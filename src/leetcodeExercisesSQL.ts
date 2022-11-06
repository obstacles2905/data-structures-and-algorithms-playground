
/**
 *  183. Customers Who Never Order
 *  Write an SQL query to report all customers who never order anything.
    Return the result table in any order.
    The query result format is in the following example.

    SELECT c.name as Customers FROM customers c WHERE c.id NOT IN (SELECT customerId FROM orders);

 */

/**
 * 197. Rising Temperature
 *
 * select id from weather w where w.temperature > (select w2.temperature from weather w2 where datediff(w.recorddate, w2.recorddate) =1) order by recordDate
 */

/**
 627. Swap Salary
 update salary set sex = if(sex = 'f', 'm', 'f')
 */