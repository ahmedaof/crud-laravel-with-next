<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        switch ($this->method()) {
            case 'PUT':
                return [
                    'id' => 'required|numeric|exists:contact_information,id',
                    'email' => 'required|email|unique:contact_information,email,' . $this->id,
                    'phone' => 'required|unique:contact_information,phone,' . $this->id,
                    'first_name' => 'required|max:255',
                    'last_name' => 'required|max:255',

                ];
                break;
            default:
                return [
                    'email' => 'required|unique:contact_information|max:255|email',
                    'phone' => 'required|unique:contact_information|max:255',
                    'first_name' => 'required|max:255',
                    'last_name' => 'required|max:255',
                ];
                break;
        }
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
