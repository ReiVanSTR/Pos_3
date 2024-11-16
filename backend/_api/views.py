from .models import User
from rest_framework import generics
from .serializers import UserRegisterSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginPinTokenSerializer

class LoginPinTokenView(generics.CreateAPIView):
    serializer_class = LoginPinTokenSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = LoginPinTokenSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateUserViev(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]

