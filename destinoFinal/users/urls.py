from django.urls import path
from django.contrib.auth.views import LogoutView

from . import views

urlpatterns = [
  path('registro/', views.register, name='register'),
  path('login/', views.login_form, name='login'),
  path('logout/', LogoutView.as_view(), name='logout'),
]
