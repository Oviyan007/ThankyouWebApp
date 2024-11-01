from django.shortcuts import render, redirect
from django.contrib import messages
from core.models import Attendee

def index(request):
    if request.method == "POST":
        name = request.POST.get('Uname')
        number = request.POST.get('Uphone')
        
        if name and number:
            try:
                attendee = Attendee(name=name, phone=number)
                attendee.save()
                return redirect('thankyou', name=name)
            except Exception as e:
                messages.error(request, "Error saving data. Please try again.")
                return render(request, 'index.html')
        else:
            messages.error(request, "Please fill in all fields.")
            return render(request, 'index.html')
    
    return render(request, 'index.html')

def thankyou(request, name):
    return render(request, 'thankyou.html', {'name': name})
