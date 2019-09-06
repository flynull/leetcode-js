--
-- @lc app=leetcode.cn id=176 lang=mysql
--
-- [176] 第二高的薪水
--
# Write your MySQL query statement below

-- select sum(m.Salary) as SecondHighestSalary 
-- FROM (SELECT a.Salary as Salary
--         FROM (
--             select em.Salary,
--             (CASE 
--             WHEN @last_salary = em.Salary
--                 THEN @rank 
--             WHEN @last_salary := em.Salary 
--                 THEN @rank := @rank + 1  
--             ELSE  @rank := @rank + 1 
--             END) AS rank  
--             from (
--                 SELECT *
--                 FROM Employee e
--                 order by e.Salary desc
--             ) em,(SELECT @rank:=0, @last_salary := NULL) b 
--             order by em.Salary desc
--         ) a
--         where a.rank = 2
--         limit 1
--         ) m

-- 从一个空的表中查数据会返回NULL
SELECT 
(SELECT DISTINCT Salary FROM Employee
ORDER BY  Salary DESC
LIMIT 1, 1 )
AS SecondHighestSalary

