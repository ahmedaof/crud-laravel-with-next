<?php

namespace App\Repositories\interfaces;

use Illuminate\Http\Request;

interface ContactRepositoryInterface
{
    public function getAllContacts();
    public function getContactById($ContactId);
    public function deleteContact($ContactId);
    public function createContact(array $ContactDetails);
    public function updateContact($ContactId, array $newDetails);
}
