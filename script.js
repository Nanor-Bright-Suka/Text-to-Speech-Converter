let speech = new SpeechSynthesisUtterance();

   let voices = [];

   let voiceSelect = document.getElementById('voiceSelect');

   window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      speech.voice = voices[0];

      voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));


      voiceSelect.addEventListener("change", ()=> {
         speech.voice = voices[voiceSelect.value];
      });
     
   
      }

   
document.getElementById("listenUp").addEventListener("click", () => {
      speech.text = document.getElementById("textInput").value;
      speech.voice = window.speechSynthesis.speak(speech);
})