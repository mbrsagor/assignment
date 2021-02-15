from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Movie
from .serializers import MovieSerializer, TokenObtainTokenSerializer


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'release_year']
    permission_classes = [IsAuthenticated, ]


class CustomJWTView(TokenObtainPairView):
    serializer_class = TokenObtainTokenSerializer
