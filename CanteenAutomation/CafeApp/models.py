from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# from django.contrib.auth.models import AbstractUser

# class User(AbstractUser):
#     type  = models.CharField(max_length=100,choices=(('Canteen','Canteen'),('Customer','Customer')))

#     class Meta:
#         db_table = 'auth_user'

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    type  = models.CharField(max_length=100,choices=(('Canteen','Canteen'),('Customer','Customer')))
    name = models.CharField(max_length=20)
    contact_number = models.CharField(max_length=12, null=True)
    def __str__(self):
        return self.name




class canteen(models.Model):
    owner = models.OneToOneField(Profile,null=True,on_delete=models.CASCADE)
    canteen_id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.owner.name


class customer(models.Model):
    cust = models.OneToOneField(Profile,null=True,on_delete=models.CASCADE)
    customer_id = models.AutoField(primary_key=True)
    def __str__(self):
        return self.cust.name


class items(models.Model):
    canteen = models.ForeignKey(canteen,on_delete=models.CASCADE,blank=True,null=True)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    desc = models.TextField()
    price = models.IntegerField(null=False)
    def __str__(self):
        return self.name
    
class orders(models.Model):
    order_cust = models.ForeignKey(customer,null=True,on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    items = models.ManyToManyField(items,related_name="order_item",default=None,blank=False)
    total_amount = models.IntegerField()
    def __str__(self):
        return str(self.id)