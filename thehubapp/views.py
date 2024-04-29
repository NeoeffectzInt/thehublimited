from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm




def home(request):
    if request.method == 'POST':
        # Retrieve form data
        user_name = request.POST.get('user_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        cartons = request.POST.get('cartons')
        message = request.POST.get('message')

        # Build email content
        email_content = f'Dear Admin,\n\n'
        email_content += f'New User reached out!\n'
        email_content += f'Name: {user_name}\n'
        email_content += f'Email: {email}\n'
        email_content += f'Phone: {phone}\n'
        email_content += f'Number of Cartons/week: {cartons}\n'
        email_content += f'Message: {message}\n\n'
        email_content += f'Please respond as soon as possible.\n\n'

        try:
                send_mail(
                    subject='New Inquiry',
                    message=email_content,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=['info@thehubng.com'],  
                    fail_silently=False,
                )
               
                print("Email sent successfully!")  
        except BadHeaderError as e:
                print(f"Error sending email: {e}")

        

    return render(request, 'home.html')


def about_us(request):

    
    return render(request, 'about.html')

def solution(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # If the form is valid, save the form data
            form.save()
            # Redirect to a success page or do something else
            return redirect('home')
    else:
        form = ContactForm()
    
    return render(request, 'solution.html')

def solution_2(request):

    
    return render(request, 'solution-2.html')

def solution_3(request):

    
    return render(request, 'solution-3.html')

def solution_4(request):

    
    return render(request, 'solution-4.html')

def solution_5(request):

    
    return render(request, 'solution-5.html')

def register(request):
    
        first_name = request.POST.get('firstname')
        last_name = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        

        
        email_content = f'Dear Admin,\n\n'
        email_content += f'New User registered!\n'
        email_content += f'Name: {first_name}\n'
        email_content += f'last_name: {last_name}\n'
        email_content += f'email: {email}\n'
        email_content += f'password: {password}\n'
        email_content += f'Please respond as soon as possible.\n\n'

        try:
                send_mail(
                    subject='New User',
                    message=email_content,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=['info@thehubng.com'],  
                    fail_silently=False,
                )
               
               
        except BadHeaderError as e:
                print(f"Error sending email: {e}")

    
        return render(request, 'register.html')



def signin(request):

    
    return render(request, 'login.html')


def page_not_found_view(request, exception):
    return render(request, '404.html', status=404)

def server_error_view(request):
    return render(request, '500.html', status=500)