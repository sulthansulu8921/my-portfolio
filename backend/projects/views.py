from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
