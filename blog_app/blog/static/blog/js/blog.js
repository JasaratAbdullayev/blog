document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("post-form");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Default davranışı bloklayırıq
  
      const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value; // CSRF token-ı alırıq
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const content = document.getElementById("content").value;
  
      const postData = {
        title: title,
        description: description,
        content: content,
      };
  
      try {
        const response = await fetch("/api/posts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken, // CSRF token-ı header-ə əlavə edirik
          },
          body: JSON.stringify(postData),
        });
  
        if (response.ok) {
          alert("Post uğurla əlavə edildi!");
          form.reset(); // Formu təmizləyirik
        } else {
          alert("Xəta baş verdi! Yenidən yoxlayın.");
        }
      } catch (error) {
        console.error("Xəta:", error);
        alert("Serverə qoşulmaq mümkün olmadı!");
      }
    });
  });
  