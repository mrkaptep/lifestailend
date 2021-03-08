UPDATE tailend_goals 
SET title = $2,
content = $3,
time_table = $4
WHERE goal_id = $1;
SELECT * FROM tailend_goals;