$(document).ready(function(){$(".carousel").carousel({interval:7e3}),$("#confirm_password").keyup(function(){$(this).val().length>=2&&$("#hidden_form").slideDown()}),$(window).width()>=800?$("#bidang_usaha").on("change",function(){$("#hidden_form_2").slideDown(),setTimeout(function(){$(location).attr("href","#confirm_password"),$("#alamat").focus()},300)}):$("#bidang_usaha").on("change",function(){$("#hidden_form_2").slideDown(),setTimeout(function(){$(location).attr("href","#email"),$("#alamat").focus()},300)}),$(window).resize(function(){$(window).width()>=800?$("#bidang_usaha").on("change",function(){$("#hidden_form_2").slideDown(),setTimeout(function(){$(location).attr("href","#confirm_password"),$("#alamat").focus()},300)}):$("#bidang_usaha").on("change",function(){$("#hidden_form_2").slideDown(),setTimeout(function(){$(location).attr("href","#email"),$("#alamat").focus()},300)})}),$("input,select,textarea").not("[type=submit]").jqBootstrapValidation({preventSubmit: true})});