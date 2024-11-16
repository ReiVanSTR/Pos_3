from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import CreateUserViev, LoginPinTokenView


urlpatterns = [
    path("user/register/", CreateUserViev.as_view(), name = "register"),    
    path("token/", LoginPinTokenView.as_view(), name = "get_token"),    
    path("token/refresh/", TokenRefreshView.as_view(), name = "refresh_token"),    
]