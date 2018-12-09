package com.pontointeligente.api.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pontointeligente.api.entities.Empresa;

@Service
public interface EmpresaService {

	/**
	 * Retorna uma empresa, dado um CNPJ
	 * 
	 * @param cpnj
	 * @return
	 */
	Optional<Empresa> buscarPorCnpj(String cnpj);
	
	
	/**
	 * Cadastra uma nova empresa na base de dados
	 * 
	 * @param empresa
	 * @return
	 */
	Empresa persistir(Empresa empresa);
}
