from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('thankyou/<str:name>/', views.thankyou, name='thankyou'),
]