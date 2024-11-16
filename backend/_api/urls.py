from django.urls import path
from .views import CreateUserViev, LoginPinTokenView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("user/register/", CreateUserViev.as_view(), name = "register"),    
    path("token/", LoginPinTokenView.as_view(), name = "get_token"),    
    path("token/refresh/", TokenRefreshView.as_view(), name = "refresh_token"),    
]