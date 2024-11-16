# Generated by Django 5.1.2 on 2024-11-08 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WorkHoursData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('hours', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=150)),
                ('login_pin', models.SmallIntegerField(unique=True)),
                ('post', models.IntegerField(default=0)),
                ('permissions', models.TextField(default='', max_length=100)),
                ('work_hours', models.ManyToManyField(to='users.workhoursdata')),
            ],
        ),
    ]