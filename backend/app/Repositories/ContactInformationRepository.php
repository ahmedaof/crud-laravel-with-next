<?php

namespace App\Repositories;

use App\Models\ContactInformation;
use App\Repositories\interfaces\ContactRepositoryInterface;

class ContactInformationRepository implements ContactRepositoryInterface
{
    public function getAllContacts()
    {
        return ContactInformation::all();
    }

    public function getContactById($ContactId)
    {
        return ContactInformation::find($ContactId);
    }

    public function deleteContact($ContactId)
    {
        $contact = ContactInformation::find($ContactId);
        if (!$contact) {
            return false;
        } else {
            $contact->delete();
            return true;
        }
    }

    public function createContact(array $ContactDetails)
    {
        return ContactInformation::create($ContactDetails);
    }

    public function updateContact($ContactId, array $newDetails)
    {
        ContactInformation::whereId($ContactId)->update($newDetails);
        return ContactInformation::find($ContactId);
    }
}
