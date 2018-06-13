$(document).ready(function () {
    $("#home").click(function () {
        //conteudo
        var texto = "Casado e pai do Lucas de 8 anos e da Manuela de 1 ano e meio. Atuo com T.I. desde 2000.<br>Tenho experiência nas áreas de infraestrutura, telefonia, redes, banco de dados, ERP e desenvolvimento web e mobile.<br>Atualmente sou Gestor de Tecnologia da Informação da Costa Brasil focando na área de sistemas onde priorizamos a automatização e melhoria de processos, integração de sistemas, desenvolvimento de relatórios operacionais e gerenciais com disparos automáticos via e-mail e manutenção e melhoria nos sistemas web.<br>Além disso, desenvolvi projetos de migração dos servidores para a nuvem e implantação de VOIP, suporte ao ERP e desenvolvimento de sistema WEB, visando redução de custos e possibilitando uma estrutura de pessoal mais enxuta.";
        $("#titulo-conteudo").html("UM POUCO SOBRE MIM...");
        $("#texto-conteudo").html(texto);
    })

    $("#formacao").click(function () {
        //conteudo
        var texto = "<b>FIAP</b><br>MBA - DESENVOLVIMENTO DE APLICAÇÕES E GAMES PARA DISPOSITIVOS MÓVEIS INTERNET DAS COISAS<br>2018 - 2019<br><br><b>UNIVERSIDADE SANTA CECÍLIA - UNISANTA</b><br>BACHAREL EM CIÊNCIAS DA COMPUTAÇÃO<br>1998 - 2001";
        $("#titulo-conteudo").html("INSTITUIÇÕES QUE ME ENSINARAM A TEORIA...");
        $("#texto-conteudo").html(texto);
    })

    $("#experiencia").click(function () {
        //conteudo
        var texto = "<b>Desenvolvedor de Sistemas</b> (Costa Brasil): 2015 - Atualmente<br><b>Analista de Sistemas</b> (MTF Transportes): 2013 - 2015<br><b>Analista de Sistemas</b> (Cesari Logística): 2011 - 2013<br><b>Programador Web</b> (Editora Melhoramentos): 2007 - 2011<br><b>Analista de Suporte</b> (Estrada Transportes): 2000 - 2007";
        $("#titulo-conteudo").html("LUGARES QUE ME AJUDARAM A APRENDER NA PRÁTICA...");
        $("#texto-conteudo").html(texto);
    })

    $("#hobby").click(function () {
        //conteudo
        var texto = "Além da paixão por tecnologia, curto carros antigos, música e cervejas artesanais.<br>Tenho um Fusca 68 que é meu xodó. Gosto de escutar Jazz, Blues, Música Eletrônica e Hip Hop.<br>Aprecio uma boa cerveja (tenho coleção de várias artesanais nacionais e importadas).<br>Sempre que possível, me reuno com os amigos para fazer aquele churrasco e dar boas risadas.";
        $("#titulo-conteudo").html("COISAS QUE GOSTO DE FAZER...");
        $("#texto-conteudo").html(texto);
    })
})

