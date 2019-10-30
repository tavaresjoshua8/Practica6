<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'computer_id',
        'department', 'leader', 'observations'
    ];

    public function computer()
    {
        $this->belongsTo(Computer::class);
    }
}
