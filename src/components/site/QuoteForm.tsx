const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta a mensagem para o seu WhatsApp
    const textMessage = `*Novo Pedido de Orçamento - Golly Web*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tipo de Projeto:* ${formData.projectType}\n` +
      `*Mensagem:* ${formData.message || "Sem mensagem extra"}`;

    const whatsappUrl = `https://wa.me/5583998763599?text=${encodeURIComponent(textMessage)}`;

    // Abre o WhatsApp com os dados preenchidos
    window.open(whatsappUrl, "_blank");
  };
