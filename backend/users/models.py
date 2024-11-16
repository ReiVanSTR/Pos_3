from django.db import models

# Create your models here.

class WorkHoursData(models.Model):
    date = models.DateField()           # Дата рабочего дня
    hours = models.DecimalField(max_digits=5, decimal_places=2)  # Количество отработанных часов

    def __str__(self):
        return f"{self.date} - {self.hours} hours"

class User(models.Model):
    id = models.AutoField(primary_key=True)            # Первичный ключ
    username = models.CharField(max_length=150)             # Имя пользователя
    login_pin = models.SmallIntegerField(unique=True)
    post = models.IntegerField(default = 0)                            # ID поста
    work_hours = models.ManyToManyField(WorkHoursData)      # Связь с WorkHoursData
    permissions = models.TextField(max_length=100, default="")

    def __str__(self):
        return self.username