# server/trips/views.py

from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, viewsets # changed
from rest_framework_simplejwt.views import TokenObtainPairView # new

from .models import Trip # new
from .serializers import LogInSerializer, NestedTripSerializer, UserSerializer # changed
from django.db.models import Q


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class LogInView(TokenObtainPairView): # new
    serializer_class = LogInSerializer

# server/trips/views.py

class TripView(viewsets.ReadOnlyModelViewSet):
    lookup_field = 'id' # new
    lookup_url_kwarg = 'trip_id' # new
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = NestedTripSerializer

    def get_queryset(self): # new
        user = self.request.user
        if user.group == 'driver':
            return Trip.objects.filter(
                Q(status=Trip.REQUESTED) | Q(driver=user)
            )
        if user.group == 'rider':
            return Trip.objects.filter(rider=user)
        return Trip.objects.none()
