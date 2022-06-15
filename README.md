# React Native Galo Cego
  This is my first project using React Native. It shows a photo of "Galo Cego", a famous Brazilian meme, and was entirely built in VSCode for Mac, 
making it also my first project entirely coded in a Macintosh system. 
  I faced some hard challenges while initiating this project. The development itself was quite easy, but React-Native isn't entirely adapted for the
new Apple ARM64 architecture, so, I had to pass through a lot of problems while installing CocoaPods. My tip for anyone starting in developing apps using
Macs with ARM64 architecture (M1 and M2 series) is: make sure you have the .lock file, the podfile is correct and never, I repeat, NEVER, make a folder's
name composite; always choose one-word names (respect the camelCase!)'; two-word names can cause bugs inside the compiling process, since they, lots of 
times, use just one-word names inside their coding process, so, "React Native Projects" folder would be read as "React", and, inside their terminal, it 
would return a big error, and the entire build would fail.
Speaking more about the project itself: it includes an round image of Galo Cego, a round-edged square button and some text. When you tap on the button, it 
opens the YouTube app (or your default browser, if YouTube's app isn't installed) and plays Galo Cego's most famous video "O Retorno do Poeta Galo Cego", which
turned him into a meme. 
