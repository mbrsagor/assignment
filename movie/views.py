from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Movie
from .serializers import MovieSerializer, TokenObtainTokenSerializer


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated, ]


class CustomJWTView(TokenObtainPairView):
    serializer_class = TokenObtainTokenSerializer
