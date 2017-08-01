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

-- create table [TableList]
create table TableList(
	TableId int identity(1,1) not null,
	vName varchar(30) not null,
	Explication nvarchar(500),
	DataBaseId int not null,
	IsDeleted bit null
	)
	on[primary]
	go
	alter table[dbo].[TableList] add constraint[DF_TableList_IsDeleted] DEFAULT((0)) FOR[IsDeleted]
	go
	
-- Field of TABLE
create table FieldList(
	FieldId int identity(1,1) not null,
	vName varchar(50) not null,
	vType varchar(20) not null,
	iLength int null,
	Explication nvarchar(500),
	TableId int not null,
	IsDeleted bit null
	)
	on[primary]
	go
	alter table [dbo].[FieldList] add constraint[DF_FieldList_IsDeleted] DEFAULT((0)) for[IsDeleted]
	go
	
