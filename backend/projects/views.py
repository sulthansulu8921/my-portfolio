from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        contact = serializer.save()
        
        # Prepare email details
        subject = f"New Portfolio Contact: {contact.name}"
        body = (
            f"You received a new inquiry from your portfolio contact form:\n\n"
            f"Name: {contact.name}\n"
            f"Email: {contact.email}\n\n"
            f"Message:\n{contact.message}\n"
        )
        
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_RECEIVER],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Error sending email notification: {e}")

