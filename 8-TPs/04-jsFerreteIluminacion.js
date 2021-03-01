/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y 
si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
“FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	//txtIdprecioDescuento
 	//txtIdCantidad
 	// Marca

 	var cantidadLamparitas;
 	var marcaLamparita;
 	var precioUnitario;
 	var totalSinDescuento;
 	var totalConDescuento;
 	var descuento;

 	precioUnitario = 35;
 	cantidadLamparitas = txtIdCantidad.value;
 	cantidadLamparitas = parseInt(cantidadLamparitas);
 	marcaLamparita = Marca.value;

 	switch (cantidadLamparitas)
 		case "1":
 		case "2":
 			descuento = 0;
 		break;

 		


/*
	totalSinDescuento = cantidadLamparitas * precioUnitario;

 	if(cantidadLamparitas > 5 )
 	{
		descuento = 50;
 	}
 	else
 	{
 		if (cantidadLamparitas == 5)
 		{
 			if (marcaLamparita == "ArgentinaLuz")
 			{
 				descuento = 40;
 			}
			else
			{
				descuento = 30;
			}	
 		}
 		else 
 		{	
 			if(cantidadLamparitas == 4)
 			{
 				if (marcaLamparita == "ArgentinaLuz" || marcaLamparita == "FelipeLamparas")
 				{
 					descuento = 25;
 				}
 				else
 				{
	 				descuento = 20;
 				}
 			}
 			else
	 		{
 				if(cantidadLamparitas == 3)
 				{
 					if (marcaLamparita == "ArgentinaLuz")
 					{
 						descuento = 15;
	 				}
					else
 					{
 						if (marcaLamparita == "FelipeLamparas")
 						{
 						descuento = 10;
	 					}
 				else 
 				{
 					descuento = 5;
				}	
 			}
 		}
 	}

 
 	totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento/100);
 
 	if (totalConDescuento > 120)
 	{
	 	totalConDescuento= totalConDescuento + (totalConDescuento * 0.1);
 	}


 	txtIdprecioDescuento.value = totalConDescuento;


 }
*/





























