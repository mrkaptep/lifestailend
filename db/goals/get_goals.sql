SELECT * 
FROM tailend_goals
WHERE author_id = $1
ORDER BY time_table ASC