-- SQL SERVER
-- quy tắc đặt tên 
--1. tên bảng
--2. tên trường dữ liệu
--3. tên Store 
--4. tên Function
-- Create DataBase

-- create table USER
create table Users(
	UserId int identity(1,1) not null,
	UserName char(20) not null,
	PassWord char(50) not null,
	IsDeleted bit null
)
ON[PRIMARY]  
GO  
ALTER TABLE[dbo].[Users] ADD CONSTRAINT[DF_User_IsDeleted] DEFAULT((0)) FOR[IsDeleted]  
GO 
--
create procedure InsertUsers
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
--
create procedure DeleteUsers
@UserId int
as
	begin
		update Users set IsDeleted=1
		where UserId=@UserId
	end
go
--
create procedure UpdateUsers
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
Create Procedure GetAllUsers
as
	begin
		select * from Users
	end
go
--
Create PROCEDURE GetUsersById
@UserId
as
	begin
		select * from Users
		where UserId=@UserId
	end
go