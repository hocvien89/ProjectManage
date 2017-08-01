--table [Users]
create procedure sp_InsertUsers
@UserName char(20),
@PassWord char(50)
as 
	begin
		insert into Users
		(UserName,PassWord) values
		(@UserName,@PassWord),
		SELECT SCOPE_IDENTITY()
	end
go
-- Delete Users by id
create procedure sp_DeleteUsers
@UserId int
as
	begin
		update Users set IsDeleted=1
		where UserId=@UserId
	end
go
--Update Users
create procedure sp_UpdateUsers
@UserId int,
@UserName char(20),
@PassWord char(50),
@IsDeleted bit
as
	begin	
		update Users set 
		UserName=@UserName,
		PassWord=@PassWord,
		IsDeleted=@IsDeleted
		where UserId=@UserId
	end
go
--
Create Procedure sp_GetAllUsers
as
	begin
		select * from Users
	end
go
--
Create PROCEDURE sp_GetUsersById
@UserId
as
	begin
		select * from Users
		where UserId=@UserId
	end
go