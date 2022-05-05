const sendEmail = () => {
    emailjs.init('User id');
    let templateParams  = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }
    console.log(templateParams);
    emailjs.send('service_id', 'template_id', templateParams).then(function(response){
        console.log('Success!', response.status, response.text);
        setStatus('success');
    }, function(error){
        console.log('Failed...', error);
        setStatus('fail');
    })
}
