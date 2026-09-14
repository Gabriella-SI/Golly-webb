const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage =
      `*Novo Pedido de Orçamento - Golly Web*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tipo de Projeto:* ${formData.projectType}\n` +
      `*Mensagem:* ${formData.message || "Sem mensagem extra"}`;

    // Link oficial encurtado que evita bloqueios de API do navegador
    const whatsappUrl = `https://wa.me/5583998673599?text=${encodeURIComponent(
      textMessage
    )}`;

    // Redireciona na mesma aba/janela para evitar o bloqueio de pop-ups
    window.location.href = whatsappUrl;
  };
