from django.db import models
from django.contrib.auth.models import User



# Create your models here.
def get_default_user():

    return User.objects.first().id if User.objects.exists() else None

class Post(models.Model):
    title=models.CharField( max_length=50)
    content=models.TextField()
    description=models.CharField(max_length=500)
    user=models.ForeignKey(User,  on_delete=models.SET_NULL, null=True, blank=True, default=get_default_user())
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title


