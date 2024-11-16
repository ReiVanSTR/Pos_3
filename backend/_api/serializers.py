# from django.contrib.auth.models import User
from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
    
class LoginPinTokenSerializer(serializers.Serializer):
    login_pin = serializers.IntegerField(write_only=True)

    def validate(self, attrs):
        login_pin = attrs.get("login_pin")

        # Attempt to get the user based on login_pin
        try:
            user = User.objects.get(login_pin=login_pin)
        except User.DoesNotExist:
            raise serializers.ValidationError("No user found with this login PIN.")

        # Generate the token pair for the user
        refresh = RefreshToken.for_user(user)

        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "login_pin", "post",]
        extra_kwargs = {
            "password":{
                "write_only": True
            },
            "post": {
                "required": True
            }
        }

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user
    