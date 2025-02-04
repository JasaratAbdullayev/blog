from django.urls import path
from . import views
from .views import post

urlpatterns = [
    path('posts/', views.PostListCreate.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', views.PostDetails.as_view(), name='post-detail'),
    path('', views.blog, name='blog'),
    path('a', views.post, name='post'),
]

