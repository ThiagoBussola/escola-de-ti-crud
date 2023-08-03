package com.projeto.escola.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RequiredValueException extends Exception {
    public RequiredValueException(String value) {
        super(String.format("Campo %s Obrigatório.", value));
    }

}
